1. create a plan to implement chat box natively using the code that we have.
2. remove the tawk.to sdk and the widget 
3. make the exact UI as per the given images use color-accent as a replacement of green color 
4. use app name as our name  "Rayt" not "Loox"
5. All user to attach max of 5 photos 
6. on send click, send all the user text details with compressed versions of image attached i.e the image should not be more 
than 5Kb in size and must be converted into .webp format.  
7. create a table and schema at Supabase

DATABASE_URL="postgresql://postgres.cgkdcxxlwyxfusrjagen:1993%40September%4029@aws-1-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.cgkdcxxlwyxfusrjagen:1993%40September%4029@aws-1-us-west-2.pooler.supabase.com:5432/postgres"
SUPABASE_URL="https://gxudphplejqsdvthfhvi.supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dWRwaHBsZWpxc2R2dGhmaHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0NzQ4MzIsImV4cCI6MjA4ODA1MDgzMn0.yaFOEBYsIKHlprnW4lPNRsZ9WvIuO_M1MoO77cURP-s"

8. Table name will be WebCustomerQueries
9. update the /Users/anant/Documents/LearningWorkspace/Shoplify/rayt-admin/prisma/migrations with the new addition of table so that 
when the database resets it creates this table using the command given below: 

### 1. Recreate tables (run all migrations)                                                            
npx prisma migrate deploy                                                                            
                                                            
### 2. Seed data                                                                                       
npx prisma db seed                                        

Or if starting fresh with no migration history:                                                      

npx prisma db push        # recreate schema                                                          
npx prisma db seed