import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: green['A100'],
    },
}));

function MainTable(props) {
    const classes = useStyles();
    const { header, body } = props;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {/* ヘッダー部分 */}
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {header.map((item, index) => (
                            <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {/* ボディ部分 */}
                <TableBody>
                    {body.map((row, index) => (
                        <TableRow key={index}>
                            {Object.keys(row).map(function (key, i) {
                                return (
                                    <TableCell align="center" key={i}>{row[key]}</TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MainTable;