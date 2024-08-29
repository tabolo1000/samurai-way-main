export const theme: Theme = {
    colors: {
        logo: "#14cbd8",
        headerbc: "#3b546a87",
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
    },
    fonts: {
        "font-family": string;
        "font-weight": number;
        "font-style": string;
        "font-size": string;
        color: string;
    }
}