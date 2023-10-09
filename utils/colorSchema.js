export const scheme = {
    RED: "#FFA0A0",
    YELLOW: "#FFEAA0",
    GREEN: "#A0FFB0",
    BLUE: "#A0FFF9",
    PURPLE: "#AEA0FF",
    VIOLET: "#D0A5FB",
    PINK: "#F2A0FF",
}

export const randomColor = () => {
    return Object.values(scheme)[Math.floor(Math.random() * Object.keys(scheme).length + 1)]
}