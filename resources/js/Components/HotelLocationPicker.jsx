import { useState, useEffect, useRef } from 'react';

const HotelLocationPicker = ({ name, handleInputChange, value, setPlaceID }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [suggestions, setSuggestions] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!inputValue) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(() => {
            fetchLocationSuggestions(inputValue);
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const fetchLocationSuggestions = async (query) => {
        try {
            const response = await fetch(`/api/locations?q=${query}`);
            const data = await response.json();
            setSuggestions(data.original.places || []);
        } catch (error) {
            console.error('Error fetching location suggestions:', error);
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        handleInputChange(event);
    };
    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (suggestion,place_id) => {
        setInputValue(suggestion);
        setSuggestions([]);
        const syntheticEvent = {
            target: { name, value: suggestion }
        };
        handleInputChange(syntheticEvent);
        
        if(setPlaceID){
            setPlaceID(place_id)
        }
    };

    return (
        <div className="relative" ref={containerRef}>
            <input
                type="text"
                name={name}
                onChange={handleChange}
                placeholder="Add Location"
                className="rounded px-3 py-[5px] w-full"
                value={inputValue}
            />
            {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border rounded shadow">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            data-place-id = {suggestion.place_id}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(suggestion.description,suggestion.place_id)}
                        >
                            {suggestion.description}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HotelLocationPicker;
