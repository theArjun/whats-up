"""core URL Configuration"""
from django.contrib import admin
from django.urls import (
    include,
    path,
)


urlpatterns = [
    path('api/', include('core.api_urls')),
    path('admin/', admin.site.urls),
]
