module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    //DATABASE_URL: process.env.DATABASE_URL || 'postgresql://last_minute_chef@localhost/last_minute_eats',
    //For Azure Deployment
    DATABASE_URL: process.env.POSTGRESQLCONNSTR_ || 'postgresql://last_minute_chef@localhost/last_minute_eats',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://last_minute_chef@localhost/last_minute_eats_test',
    CLIENT_ORIGIN: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
    AUTHORIZATION_TOKEN: process.env.AUTHORIZATION_TOKEN || 'admin_token'
}

