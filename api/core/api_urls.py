"""core APIs URL Configuration"""
from django.urls import (
    include,
    path,
)


urlpatterns = [
    path('', include('todo.urls', namespace='todo')),
]
