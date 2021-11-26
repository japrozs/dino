export const chooseRandomFolderColor = () => {
    const colors = ["#1e76da", "#28c077", "#718096", "#e53e3e", "#e2e8f0"];
    return colors[Math.floor(Math.random() * colors.length)];
};
