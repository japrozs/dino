export const chooseRandomFolderColor = () => {
    const colors = [
        "#1e76da",
        "#21e6c1",
        "#28c7fa",
        "#f9ff21",
        "#ff1f5a",
        "#0da574",
        "#e53e3e",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};
