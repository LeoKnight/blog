import React from "react"
import Loadable from 'react-loadable';

const LoadableEditor = Loadable({
    loader: () => import('./Discussion'),
    loading: () => (<div>Loading...</div>)
});

export default LoadableEditor
