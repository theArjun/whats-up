from django.urls import (
    include,
    path,
)
from rest_framework.routers import DefaultRouter

from .views import TodoViewSet


app_name = 'todo'

router = DefaultRouter()
router.register('', TodoViewSet)

urlpatterns = [path(
    'todo/',
    include(router.urls),
)]
