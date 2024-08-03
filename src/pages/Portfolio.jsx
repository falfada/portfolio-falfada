import Project from "../components/Project"

function Portfolio(){
    const projects = [
        {
            projectName: "Rebel",
            img: "assets/rebel.png",
            githubRepo: "https://github.com/falfada/Rebel",
            deployedLink: "https://getrebeledits.com/"
        },
        {
            projectName: "My Recovery 101",
            img: "assets/myrecovery101.png",
            githubRepo: "https://github.com/falfada/my-recovery-101",
            deployedLink: "https://myrecovery101.com.au/"
        },
        {
            projectName: "Web API: Blog",
            img: "assets/blog.png",
            githubRepo: "https://github.com/falfada/personal-blog",
            deployedLink: "https://falfada.github.io/personal-blog/"
        },
        {
            projectName: "Best Day Of The Year",
            img: "assets/bday.png",
            githubRepo: "https://github.com/falfada/best-day-of-the-year",
            deployedLink: "https://falfada.github.io/best-day-of-the-year/"
        },
        {
            projectName: "J.A.T.E",
            img: "assets/jate.png",
            githubRepo: "https://github.com/falfada/text-editor",
            deployedLink: "https://text-editor-wj9b.onrender.com/"
        }
    ]
    
    return(
        <Project projects={projects}/>
    )
}
export default Portfolio;