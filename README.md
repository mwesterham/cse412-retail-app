# cse412-retail-app
App for CSE412 project phase 3 proposal

### Setting up the database
1. In Oracle VM manager, set VMNet mode to bridged
2. Run the VM
3. Get the IP with

`hostname -I`

4. Obtain the port number of the running psql instance (and remember for later)

`sudo vi /etc/postgresql/14/main/postgresql.conf`

`port = 5432`

5. Set the listening address to listen to everything

`sudo vi /etc/postgresql/14/main/postgresql.conf`

`listen_addresses = '*'`

6. Modify the permissions to allow all clients to connect

`sudo vi /etc/postgresql/14/main/pg_hba.conf`

`host    all             all             0.0.0.0/0`

7. Restart the psql server

`/etc/init.d/postgresql restart`

8. Set a password for your psql user now

`sudo -u postgres psql -d cse412`

`/password`