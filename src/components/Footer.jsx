const currentYear = new Date().getFullYear();
const gitHubUrl = "https://github.com/AndrewWilborn";

export default function Footer(){
    return (
        <footer>
            <p>&copy; {currentYear}</p>
            <p><a href="gitHubUrl" target="_blank" rel="noreferrer">See Code in GitHub</a></p>
        </footer>
    )
}