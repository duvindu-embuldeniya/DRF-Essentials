from django.contrib import admin
from . models import Customer, Tag, Blog, Review

admin.site.register(Customer)
admin.site.register(Tag)
admin.site.register(Blog)
admin.site.register(Review)