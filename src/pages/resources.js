import React from "react"
import Layout from "../components/layout"
import borderStyles from "./resources.module.css"

export default function Resources() {
    return (
        <Layout>
            <h1 style={{textAlign: `center`}}>Mental Health Resources</h1>
            <p style={{textAlign: `center`}} className={borderStyles.borderAlternate}>
                This is a collection some mental health resources available to students at UIUC. Some may be only in person, and some may be only online, so feel free to look through all the resources to find one that
                best provides the help that you're looking for.
            </p>

            <h3 style={{textAlign: `center`}}><a href="https://cs.illinois.edu/academics/undergraduate/cs-student-opportunity-series-cs-sos">CS SOS Presentation</a></h3>
            <p style={{textAlign: `center`}} className={borderStyles.border}>
                The CS Student Opportunity Series (SOS) provides tools and resources for undergraduate students in CS majors to grow academically, professionally, and personally. Each semester, students hear presentations from experts about a variety of topics.  
                Thanks to students from CS Registered Student Organizations, each presentation includes a student panel to help CS students practically implement strategies for success.
            </p>

            <h3 style={{textAlign: `center`}}>ACM x WCS x BAAC Mentoring Program</h3>
            <p style={{textAlign: `center`}} className={borderStyles.border}>
                This is a mentoring program, coordinated by ACM, WCS, and BAAC, and it's for current CS students to help guide and support other CS students and prospective students. This mentoring program holds meetings and 1-on-1 sessions
                between mentors and mentees, so mentees can ask questions about CS@UIUC, or just questions about the University as a whole.
            </p>

            <h3 style={{textAlign: `center`}}><a href="https://www.youtube.com/watch?v=dr2xYkUokQo">ACM Mental Health Awareness Night</a></h3>
            <p style={{textAlign: `center`}} className={borderStyles.border}>
                Students get to learn more about tips and ways to manage mental well being, as well as mental health resources on campus, and in the surrounding area. The event also includes representatives from the Computer Science Department, College of Engineering, and Counseling Center. 
                This video was recorded during a prior ACM Mental Health Awareness Night, and another will be held soon in the coming semesters.
            </p>
            <h3 style={{textAlign: `center`}}>CS Community Social Hours</h3>
            <p style={{textAlign: `center`}} className={borderStyles.border}>
                Safe spaces to meet and talk, hosted by CS staff and faculty. There'll be more information coming soon for this resource.
            </p>

            <h3 style={{textAlign: `center`}}><a href="https://cs.illinois.edu/academics/undergraduate/undergraduate-advising">CS Advising</a></h3>
            <p style={{textAlign: `center`}}>
                In general, CS Advising is available to help students navigate their degree requirements and policies of their department, their college, and the university as a whole. CS advisors can help you plan your course schedule, review your degree requirements, and assess your progress.
                CS Advising can also help refer students to someone who can help if they're struggling - academically or otherwise.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>1210 Siebel Center</p>
            <h5 style={{textAlign: `center`}}>Undergraduate Academic Advisors</h5>
            <div class="row" >
                <div className={borderStyles.column} style={{textAlign: `center`}}>
                    <h6>Elizabeth Gonzalez</h6>
                    <p className={borderStyles.border}>egon@illinois.edu</p>
                </div>
                <div className={borderStyles.column} style={{textAlign: `center`}}>
                    <h6>Katrina Jones</h6>
                    <p className={borderStyles.border}>krjames@illinois.edu</p>
                </div>
                <div className={borderStyles.column} style={{textAlign: `center`}}>
                    <h6>Heather Zike</h6>
                    <p className={borderStyles.border}>hlzike@illinois.edu</p>
                </div>
            </div>

            <h3 style={{textAlign: `center`}}><a href="https://www.counselingcenter.illinois.edu/">Counseling Center</a></h3>
            <p style={{textAlign: `center`}}>
                The Counseling Center is committed to providing a broad range of high quality, innovative, and ethical services that address the psychological, educational, social, and developmental needs of University of Illinois at Urbana-Champaign students. It also actively contributes to
                the campus’ broader academic mission by training and developing students and professionals, helping build a multicultural learning community, and providing leadership in forming collaborative partnerships among Student Affairs, Academic Affairs, the Graduate College, and Administrative
                Affairs units.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>Room 206, Student Services Building</p>
            <p style={{textAlign: `center`}}>(217) 333-3704</p>
            <div class="row">
                <div className={borderStyles.columnAlternate} style={{textAlign: `center`}}>
                    <h5>College of Engineering Embedded Counselor</h5>
                    <h6 style={{textAlign: `center`}}>Ken Nafziger</h6>
                    <p style={{textAlign: `center`}} className={borderStyles.border}>kn7@illinois.edu</p>
                </div>
                <div className={borderStyles.columnAlternate} style={{textAlign: `center`}}>
                    <h5>College of LAS Embedded Counselor</h5>
                    <h6 style={{textAlign: `center`}}>Tabitha Cochran</h6>
                    <p style={{textAlign: `center`}} className={borderStyles.border}>twalqu2@illinois.edu</p>
                </div>
            </div> 

            <h3 style={{textAlign: `center`}}><a href="https://www.mckinley.illinois.edu/medical-services/mental-health">McKinley Health</a></h3>
            <p style={{textAlign: `center`}}>
                The Mental Health unit at McKinley Health Center (McKinley) provides assessment and recommendations for subsequent treatment for a variety of emotional and behavioral difficulties. Short-term individual psychotherapy, up to a few sessions, is provided as well.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}} className={borderStyles.border}>McKinley Health Center</p>

            <h3 style={{textAlign: `center`}}><a href="https://oiir.illinois.edu/womens-center">Women's Resource Center</a></h3>
            <p style={{textAlign: `center`}}>
                The mission of the Women's Resources Center is to improve the campus climate for womxn students, which we do by developing and implementing programs that address social issues through an intersectional lens. The Center also serves as the designated provider of 
                Confidential Advising services, offering advocacy and support services to students, faculty, and staff who have experienced sexual misconduct (sexual assault, sexual harassment, sexual exploitation, stalking, and/or dating/domestic violence).
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>616 E. Green St., Suite 202</p>
            <p style={{textAlign: `center`}}>womenscenter@illinois.edu</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 333-3137</p>

            <h3 style={{textAlign: `center`}}><a href="https://www.disability.illinois.edu/">Disability Resources and Educational Services (DRES)</a></h3>
            <p style={{textAlign: `center`}}>
                The mission of the Division of Disability Resources and Educational Services is to ensure that qualified individuals with disabilities are afforded an equal opportunity to participate in and benefit from the programs, services and activities 
                of the University of Illinois at Urbana-Champaign through the identification and enactment of reasonable modifications to institutional policies and procedures, the provision of effective auxiliary aids and services, the establishment of innovative educational services, 
                and the pursuit of interdisciplinary disability research.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>1207 S. Oak St.</p>
            <p style={{textAlign: `center`}}>disability@illinois.edu</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 244-0014</p>

            <h3 style={{textAlign: `center`}}><a href="https://psc.illinois.edu/">Psychological Services Center (PSC)</a></h3>
            <p style={{textAlign: `center`}}>
                The Psychological Services Center (PSC), is operated by the Department of Psychology at the University of Illinois, Urbana-Champaign. Our Center directly contributes to the University mission of transforming lives and serving society by 
                putting knowledge to work by providing culturally relevant, evidence-based, therapy, evaluations, workshops, and consultation services to local residents and campus members.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>505 E. Green St., 3rd floor</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 333-0041</p>

            <h3 style={{textAlign: `center`}}><a href="http://woundedvetcenter.ahs.illinois.edu/">Center for Wounded Veterans in Higher Education</a></h3>
            <p style={{textAlign: `center`}}>
                Through educational innovations, research breakthroughs, and a dedicated staff of counselors and specialists, the Center supports student veterans' health and full participation in society.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>908 W. Nevada St.</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 300-3515</p>

            <h3 style={{textAlign: `center`}}><a href="https://go.illinois.edu/sac">Student Assistance Center</a></h3>
            <p style={{textAlign: `center`}}>
                The Student Assistance Center is a collaborative resource that promotes the holistic growth and development of Illinois students. To that end, the center partners with students, faculty, staff, and family members to address 
                disruptions to students’ academic and social stability or behaviors that cause distress in our community. The center strives to foster a community of care in which all members have a personal responsibility to themselves and others.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>Turner Student Services Building, 3rd floor</p>
            <p style={{textAlign: `center`}}>helpdean@illinois.edu</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 333-0050</p>

            <h3 style={{textAlign: `center`}}><a href="https://go.illinois.edu/edean">Emergency Dean</a></h3>
            <p style={{textAlign: `center`}}>
                One of the resources the University makes available to students is the support and guidance of a University administrator who is on call and can be reached when University offices are closed. The Emergency Dean supports 
                students who are experiencing health or safety emergency situations in which an immediate University response is needed and which cannot wait until the next business day.
            </p>
            <h4 style={{textAlign: `center`}}>Contact</h4>
            <p style={{textAlign: `center`}}>Turner Student Services Building, 3rd floor</p>
            <p style={{textAlign: `center`}}>helpdean@illinois.edu</p>
            <p style={{textAlign: `center`}} className={borderStyles.border}>(217) 333-0050</p>

            <h3 style={{textAlign: `center`}}><a href="http://wecare.illinois.edu">We Care</a></h3>
            <p style={{textAlign: `center`}} className={borderStyles.borderAlternate}>
                University of Illinois offices and services that are available to assist students, faculty, and staff related to sexual assault and harassment, stalking, sexual exploitation, dating violence, and domestic violence.
            </p>

        </Layout>
    )
}