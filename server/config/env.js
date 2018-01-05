let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'test',
	DBPASSWORD: 'test',
	DBHOST: 'ds143907.mlab.com:43907',
	DBNAME: 'capstone',
	SERVERNAME: 'dev-server'
}
mongodb://<dbuser>:<dbpassword>@ds143907.mlab.com:43907/capstone
// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env