import { useState } from 'react';

function StaffPage() {
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((data) => {
                setResults(data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                alert("Failed to fetch staff data.");
            });
    };

    return (
        <>
            <h2>Our Staff</h2>
            <article>
                <p>Meet our amazing staff, randomly generated for this demonstration.</p>
                <button onClick={fetchResults}>Load Staff</button>
                <table>
                    <caption>Staff Information</caption>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Time Zone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((person, index) => (
                            <tr key={index}>
                                <td>
                                    <img 
                                        src={person.picture.thumbnail} 
                                        alt={`${person.name.first} ${person.name.last}`} 
                                    />
                                </td>
                                <td>{`${person.name.first} ${person.name.last}`}</td>
                                <td>
                                    <a href={`mailto:${person.email}`}>{person.email}</a>
                                </td>
                                <td>{person.phone}</td>
                                <td>{person.location.timezone.description}</td>
                                <td>{`${person.location.city}, ${person.location.state}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;
