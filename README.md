# cse412-retail-app
App for CSE412 project phase 3 proposal

### Setting up the database
1. In Oracle VM manager, go to Settings->Network then make sure Adapter 1 is NAT
2. Here also go to advanced then click port forwarding
3. Set the host port to 2222 (of your choice) and guest port to 22 (default port for ssh)
4. Start the VM now
5. Get the IP with

`hostname -I`

6. Obtain the port number of the running psql instance (and remember for later)

`sudo vi /etc/postgresql/14/main/postgresql.conf`

`port = 5432`

7. Modify the permissions to allow all clients to connect

`sudo vi /etc/postgresql/14/main/pg_hba.conf`

`host    all             all             127.0.0.0/0`

8. Restart the psql server

`/etc/init.d/postgresql restart`

9. Set a password for your psql user now

`sudo -u postgres psql -d cse412`

`\password`

10. Return to terminal, now add ssh inside VM

`sudo apt install openssh-server`

11. Now on your local machine (not the VM) start an ssh tunnel to the port found in step 3. Use the port set in step 6 to tunnel into. Also set a new port (in this case 4444) to access the postgres server through on your local machine.

`ssh -p 2222 mwesterham@localhost -L 4444:localhost:5432`