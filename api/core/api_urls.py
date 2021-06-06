"""core APIs URL Configuration"""
from django.urls import (
    include,
    path,
)
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)


urlpatterns = [
    # DRF Spectacular
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path(
        'test/',
        SpectacularSwaggerView.as_view(url_name='schema'),
        name='swagger-ui',
    ),
    path('docs/',
         SpectacularRedocView.as_view(url_name='schema'),
         name='redoc'),
    path('', include('todo.urls', namespace='todo')),
]
