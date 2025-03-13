export function getTextSize(size) {
    const sizeMap = {
        "Small": "text-small",
        "Medium": "text-medium",
        "Large": "text-large",
    };

    return sizeMap[size] || "text-medium";
}

export function getTextAlign(size) {
    const sizeMap = {
        "Center": "text-align-center",
        "Left": "text-align-left",
        "Right": "text-align-right",
    };

    return sizeMap[size] || "text-align-center";
}

export function getContainerTypeClass(color, aspect) {
    let typeStyle = `container-${color.toLowerCase()}`;
    typeStyle += aspect != "Normal" ? `-${aspect.toLowerCase()}` : "";
    return typeStyle;
}

export function getSelectableClass(selectable) {
    return selectable ? "bul-selectable" : "";
}
  
  