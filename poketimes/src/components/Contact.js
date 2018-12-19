import React from 'react';

const Contact = (props) => {
    setTimeout( () => {
        props.history.push('/about');
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto quisquam, excepturi, vel sint itaque tempore laborum obcaecati recusandae aspernatur, vitae a perspiciatis labore. Temporibus hic numquam nostrum magni ipsa.</p>
        </div>
    )
}

export default Contact