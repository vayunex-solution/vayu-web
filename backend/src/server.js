const app = require('./app');
const { seedLeadershipBlogs } = require('./services/leadershipBlogSeeder');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
    // Asynchronously seed leadership blogs into the MySQL database on startup
    seedLeadershipBlogs().catch((err) => {
        console.warn('Startup leadership seed notice:', err.message);
    });
});
