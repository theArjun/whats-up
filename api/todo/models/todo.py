from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from model_utils.models import TimeStampedModel


class Project(TimeStampedModel):
    ''' Model definition for Project '''
    name = models.CharField(
        _('Project Name'),
        max_length=200,
        unique=True,
    )
    start_date = models.DateTimeField(_('Project Start Date'))

    def __str__(self) -> str:
        return f'{self.name}'


# def get_default_project():
#     project, _ = Project.objects.get_or_create(
#         name='Default Project',
#         start_date=timezone.now(),
#     )
#     return project


class Todo(TimeStampedModel):
    ''' Model definition for Todo '''
    class TodoState(models.TextChoices):
        INCOMPLETE = ('INCOMPLETE', 'Incomplete')
        COMPLETE = ('COMPLETE', 'Complete')

    title = models.CharField(_('Todo Title'), max_length=200)
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        verbose_name=_('Project'),
        blank=True,
        null=True
    )
    state = models.CharField(
        _('Todo State'),
        max_length=10,
        choices=TodoState.choices,
        default=TodoState.INCOMPLETE,
    )

    def __str__(self) -> str:
        return f'{self.title}'
