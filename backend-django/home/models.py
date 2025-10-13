from django.db import models


class Customer(models.Model):
    customer_id = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'
    
