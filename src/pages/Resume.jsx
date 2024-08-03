import '../scss/pages/Resume.scss';
export default function Resume(){
    const fileUrl = 'assets/resume.pdf';
    const fileName = 'resume.pdf';
    return(
        <section className="container resume">
            <div className="resume-container">
                <h2 className="resume-title">Skills</h2>
                <ul className="resume-content">
                    <li>UI/UX Design</li>
                    <li>Responsive Design</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Webpack</li>
                    <li>Express</li>
                    <li>Git, Github, Gitlab</li>
                    <li>RESTful APIs, GraphQL</li>
                    <li>MongoDB, PostgreSQL, MySQL</li>
                    <li>Mongoose, Sequelize</li>
                    <li>Jest</li>
                    <li>Cross-functional team collaboration</li>
                </ul>
            </div>
            <div className="resume-container">
                <h2 className="resume-title">Resume</h2>
                <a className="resume-content" href={fileUrl} download={fileName}>Download file 📥</a>
            </div>
        </section>
    )
}