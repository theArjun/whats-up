from rest_framework import serializers

from ..models import (
    Project,
    Todo,
)


class ProjectSerializer(serializers.ModelSerializer):
    ''' Serializer for model Project '''
    class Meta:
        model = Project
        fields = (
            'name',
            'start_date',
        )


class TodoSerializer(serializers.ModelSerializer):
    ''' Serializer for model Todo '''
    class Meta:
        model = Todo
        fields = (
            'title',
            'project',
            'state',
            'created',
            'modified',
        )
