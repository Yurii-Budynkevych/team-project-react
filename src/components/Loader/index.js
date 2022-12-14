import React from 'react';
import Loader from 'react-loader-spinner';
import './loader.scss';

const LoaderComponent = () => {
	return (
		<Loader
			className='loader'
			type='Circles'
			color='#4A56E2'
			height={100}
			width={100}
			timeout={3000} 
		/>
	);
};

export default LoaderComponent;