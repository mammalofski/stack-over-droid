from django.shortcuts import render
from django.views import generic
from django.conf import settings

class MainView(generic.TemplateView):
    template_name = 'stackapp/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['STATIC_URL'] = settings.STATIC_URL
        return context