from django.contrib import admin

from .models import (
    Project,
    Todo,
)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'created', 'modified', 'name', 'start_date')
    list_filter = ('created', 'modified', 'start_date')
    search_fields = ('name', )


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'created', 'modified', 'title', 'project', 'state')
    list_filter = ('created', 'modified', 'project')
