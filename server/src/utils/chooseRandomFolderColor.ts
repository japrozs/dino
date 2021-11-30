export const chooseRandomFolderColor = () => {
    const colors = ["#1e76da", "#718096", "#e53e3e"];
    return colors[Math.floor(Math.random() * colors.length)];
};
