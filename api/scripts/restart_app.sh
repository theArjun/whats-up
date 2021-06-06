# For SQLITE
touch db.sqlite3
rm db.sqlite3

rm -rf todo/migrations 
python manage.py makemigrations todo
python manage.py migrate
./scripts/create_superuser.sh
python manage.py runserver
