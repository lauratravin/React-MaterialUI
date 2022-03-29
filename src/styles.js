import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

//this hook returns an object that contain our styles
const useStyles = makeStyles(
    (theme) => ({
            container: {
                 backgroundColor: theme.palette.background.paper,
                // background: "rgb(232, 241, 250)",
                // background: "red",
                padding: theme.spacing(8,0,6)

            },
            icon:{
                marginRight: '20px',
            },
            button:{
                marginTop: '40px'
            },
            cardGrid:{
                padding:"20px 0"
            },
            card:{
                height: '100%',
                display:'flex',
                flexDirection: 'column'
            },
            cardMedia: {
                paddingTop: '56.25%'
            },
            cardContent: {
                flexGrow: 1,
            },
            footer: {
                backgroundColor: theme.palette.background.paper,
                padding: '50px 0'
            }


    })
    )

    export default useStyles;