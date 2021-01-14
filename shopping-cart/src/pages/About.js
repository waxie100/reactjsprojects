import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>My orders</h1>
            </div>
        </Layout>
     );
}
 
export default About;