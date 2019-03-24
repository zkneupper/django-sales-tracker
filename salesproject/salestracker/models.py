from django.db import models

# Create your models here.
class Sale(models.Model):
    title = models.CharField(max_length=100)
    name_of_client = models.CharField(max_length=100) # set to mandatory field, we can always change that
    email = models.EmailField(max_length=100, unique=True)
    category = models.CharField(max_length=100) # e.g. Data Science & Analytics
    sub_category = models.CharField(max_length=100) # e.g. Data Visualization
    description = models.CharField(max_length=500, blank=True)
    total_duration = models.DecimalField(max_digits=8, decimal_places=2)
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    tools_used = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
