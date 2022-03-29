import { makeStyles } from "@material-ui/core/styles";

//this hook returns an object that contain our styles
const useStyles = makeStyles(
    (theme) => ({
            container: {
                 backgroundColor: theme.palette.background.paper,
                // background: "rgb(232, 241, 250)",
                // background: "red",
                padding: theme.spacing(8,0,6)

            }
    })
    )

    export default useStyles;