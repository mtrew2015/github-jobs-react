import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import axios from 'axios';
import './App.scss';
import Search from './components/Search/Search';
import {jobData} from './components/data/data'

function App() {
	const [ data, setData ] = useState(jobData);
    
    useEffect(() => {
        axios
        .get('https://jobs.github.com/positions.json?description=&location=new-york')
        .then(res => console.log(res))
        
    }, [])

	return (
		<div className='App'>
            <Header />
            <Search/>
			<Card  setData={setData} data={data} />
		</div>
	);
}

export default App;
