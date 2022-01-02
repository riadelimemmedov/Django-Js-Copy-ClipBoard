from django.db import models

# Create your models here.
class Color(models.Model):
    hex = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.hex)