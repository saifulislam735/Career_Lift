import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = () => {
    const data = [
        { sector: 'Software Engr.', demand: 1200 },
        { sector: 'Mechanical Engr.', demand: 900 },
        { sector: 'Electrical Engr.', demand: 1100 },
        { sector: 'Civil Engr.', demand: 800 },
        { sector: 'Chemical Engr.', demand: 950 },
        { sector: 'Aerospace Engr.', demand: 1000 },
        { sector: 'Biomedical Engr.', demand: 850 },
        { sector: 'Environmental Engr.', demand: 750 },
        { sector: 'Industrial Engr.', demand: 850 },
        { sector: 'Petroleum Engr.', demand: 700 },
        { sector: 'Computer Engr.', demand: 1050 },
        { sector: 'Materials Engr.', demand: 800 },
        { sector: 'Nuclear Engr.', demand: 600 },
        { sector: 'Ocean Engr.', demand: 650 },
        { sector: 'Geotechnical Engr.', demand: 700 },
        { sector: 'Structural Engr.', demand: 950 },
        { sector: 'Transportation Engr.', demand: 850 },
        { sector: 'Water Resources Engr.', demand: 700 },
        { sector: 'Robotics Engr.', demand: 900 },
        { sector: 'Mining Engr.', demand: 750 },
        { sector: 'Acoustic Engr.', demand: 600 },
        { sector: 'Automotive Engr.', demand: 800 },
        { sector: 'Biomechanical Engr.', demand: 700 },
        { sector: 'Fire Protection Engr.', demand: 650 },
        { sector: 'Forensic Engr.', demand: 600 },
        { sector: 'Marine Engr.', demand: 700 },
        { sector: 'Power Engr.', demand: 850 },
        { sector: 'Renewable Energy Engr.', demand: 900 },
        { sector: 'Systems Engr.', demand: 1100 }
    ];

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <h1 className="text-2xl font-extrabold mb-8 text-center text-gray-800 shadow-lg p-4 rounded-lg my-2">
                Engineering Sector Job Demand Analysis
            </h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 200 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" angle={-70} textAnchor="end" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="demand" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;
