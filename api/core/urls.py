"""core URL Configuration"""
from django.contrib import admin
from django.urls import (
    include,
    path,
)


title: str = 'Todo Admin'
admin.site.site_header = title
admin.site.site_title = f'{title}'
admin.site.index_title = f'Welcome to {title} Administration'

urlpatterns = [
    path('api/', include('core.api_urls')),
    path('admin/', admin.site.urls),
]
