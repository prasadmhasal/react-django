from django.db import models

# Create your models here.
class Data(models.Model):
    name = models.CharField(max_length=1000,null=True)
    age = models.IntegerField(max_length=1000,null=True)
    city = models.CharField(max_length=100,null=True)
    
