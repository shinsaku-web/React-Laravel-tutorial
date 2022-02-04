import React from 'react';
import { Button } from '@material-ui/core';

export const Work = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入できたわな</div>

                        <div className="card-body">Im an example component!</div>
                        <Button color="primary" variant="contained" href={`/`}>To Home</Button>
                        <Button color="secondary" variant="contained" href={`/about`}>To About</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}