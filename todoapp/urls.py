from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TodosViewSet

router = DefaultRouter()

router.register('todos', TodosViewSet, basename='todos')

urlpatterns = [
    path('api/', include(router.urls)),
]