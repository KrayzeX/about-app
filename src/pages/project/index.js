import React from 'react';
import works from '../../works';
import './index.css'

class ProjectPage extends React.Component {
    state ={
        project: null,
        error: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        setTimeout(() => {
            const project = works.find(work => work.id === id);

            this.setState({
                project: project,
                error: !project
            });
        }, 1000);
    }

    render() {
        const { project, error} = this.state;

        if (error)
            return <div className='container'> Something wrong</div>;
        
        if (!project)
            return <div className='container'>Loading...</div>

        return (
            <div className ='project'>
                <div className='container'>
                    <img
                        className='project_screenshot'
                        src={project.screenshot}
                        alt={project.title}
                    />

                    <h1 className="project_title">{project.title}</h1>

                    <p className='project_description'>{project.description}</p>

                    <div className='project_stack'>{project.stack.join(', ')}</div>

                    <div>
                        <a href={project.link} className='project_link'></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;