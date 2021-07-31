//Classes de Style de material-ui 
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    nameDes: {
        display: 'block',
    },
    Des: {
        marginTop: '15%',
    },
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));