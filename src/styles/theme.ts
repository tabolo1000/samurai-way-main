export const theme: Theme = {
    colors: {
        logo: "#b52121  ",
        headerbc: "#2f3c48eb",
        backgorundSection: "#00000089",
        borderSection: "#555"
        //rgba(52, 68, 36, 0.849)
        //fonts: '#999'
    },
    fonts: {
        "font-family": "'Be Vietnam Pro', sans-serif",
        "font-weight": 400,
        "font-style": "normal",
        "font-size": "19px",
        color: "#ddd2cd",
    }
}



//----------------------Type for Theme----------------------------------

type Theme = {
    colors: {
        logo: string;
        headerbc: string;
        backgorundSection: string;
        borderSection: string;
    },
    fonts: {
        "font-family": string;
        "font-weight": number;
        "font-style": string;
        "font-size": string;
        color: string;
    }
}