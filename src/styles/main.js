import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
        section: {
            padding: "0 15% 0 15%",
            marginTop: 40,
        },
        headerSection: {
            height: 120,
            textAlign: "center",
            backgroundColor: theme.palette.primary.dark,
            color: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
        },
        mainText: {
            fontSize: "16px",
        },
        tabSection: {
            marginTop: 10,
            padding: 6,
            display: "inline",
            border: "1px solid #DDD",
            borderRadius: 6,
        },
        tabSectionBackground: {
            backgroundColor: "#EEE",
            borderRadius: 6,
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "block",
            top: 0,
            left: 0,
            zIndex: 1,
        },

        footer: {
            height: 100,
        },
        toolbar: theme.mixins.toolbar,
        factSheet: {
            padding: "20px 0 0 0"
        },
        dietCheckboxList: {
            listStyleType: "none"
        },
        plot: {
            border: "0px outset " + theme.palette.primary.A100,
            borderRadius: "5px",
            width: "100%",
            display: "inline"
        }
    })});

export default useStyles;