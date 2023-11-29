
import { useState } from "react";

export default function ColorThemePicker() {

    const [theme, setTheme] = useState(document.body.getAttribute("data-theme"));
    console.log(theme);
    return (
        <div>{theme}</div>
    );
}