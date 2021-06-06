script="
from django.contrib.auth import get_user_model;
email = 'arjun@product-listing.com';
username = 'admin';
password = 'pass';
first_name = 'Arjun';
last_name = 'Adhikari';
User = get_user_model();
if User.objects.filter(username=username).count()==0:
    user = User.objects.create_superuser(username=username, email=email, password=password, first_name=first_name, last_name=last_name);
    print('Superuser created.');
else:
    print('Superuser creation skipped.');
"
printf "$script" | python manage.py shell
