import React from 'react';

function Resume() {
    return (
        <section>
            <div className="flex-column">
                <div className="justify-content-end">
                    <h2 id="resume" className="mt-5">Resume</h2>  
                    <p>Link to Resume <a href={"/assets/images/nickKosikResume.pdf"}>here</a></p> 
                </div>
                
            <div className="mt-5">
                <h3>Front End</h3>
                <ul class="list-group list-group-flush mb-5">
                    <li class="list-group-item">HTML</li>
                    <li class="list-group-item">CSS</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">jQuery</li>
                    <li class="list-group-item">Responsive Designs</li>
                    <li class="list-group-item">React</li>
                    <li class="list-group-item">Bootstrap</li>
                    <li class="list-group-item">Bulma</li>
                </ul>
            </div>
            <div>
                <h3>Back End</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">APIs</li>
                    <li class="list-group-item">Node</li>
                    <li class="list-group-item">Express</li>
                    <li class="list-group-item">MySQL, NoSQl, Sequelize</li>
                    <li class="list-group-item">MongoDB, Mongoose</li>
                    <li class="list-group-item">REST</li>
                    <li class="list-group-item">GraphQL</li>
                </ul>
            </div>
            
            </div>
        </section>
    )
}

export default Resume;