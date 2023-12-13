
import { useState } from "react";

export default function ColorThemePicker() {

    const [theme, setTheme] = useState(document.body.getAttribute("data-theme"));
    
    return (
        <div>{theme}</div>
    );
}