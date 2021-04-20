import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    //overflow hidden sorgt dafür dass die slides außerhalb des screens bleiben
    slider: {
        position: 'absolute',
        height: '600px',
        width: '100vw',
        margin: "0 auto",
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },

}));